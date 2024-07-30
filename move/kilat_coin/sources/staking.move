module kilat_coin::staking{
    use sui::transfer;
    use sui::coin::{Self, Coin};
    use sui::balance::{Self, Balance};
    use sui::object::{Self, UID};
    use sui::address;
    use sui::sui::SUI;
    use kilat_coin::kilat_coin::{KILAT_COIN};

    // Define a custom error code
    const EInsufficientBalance: u64 = 0;
    const ENotEnoughTokenStaked : u64 = 1;
    const EUnauthorizedAccess : u64 = 2;

    // Set A Temporary Visualization of KILAT Token Reward for stakers 
    const KilatReward: u64 = 1000;
    
    // Minimum 0.001 SUI Staked
    const MinStaked: u64 = 1_000_000; 

    // Structure to hold the contract's balance
    public struct TokenManager has key {
        id: UID,
        balance: Balance<KILAT_COIN>
    }

    // Structure to manage the Staking Process
    public struct StakeAccount has key {
        id: UID,
        owner: address,
        balance: u64,
        staked: Balance<SUI>,
    }

    // Initialize Staking Managing Account
    fun init(ctx: &mut TxContext) {
        let claimer = TokenManager {
            id: object::new(ctx),
            balance: balance::zero()
        };
        transfer::share_object(claimer);
    }

    // Function to claim the KILAT Token
    fun claim(claimer: &mut TokenManager, ctx: &mut TxContext) {
        let claim_amount = KilatReward;
        //Check if balance is enough to be claimed
        assert!(balance::value(&claimer.balance) >= claim_amount, EInsufficientBalance);
        
        let claimed_coin = coin::take(&mut claimer.balance, claim_amount, ctx);
        transfer::public_transfer(claimed_coin, tx_context::sender(ctx));
    }

    // Function to Transfer KILAT Funding to the Staking Manager
    public entry fun fund_kilat(claimer: &mut TokenManager, token: Coin<KILAT_COIN>, ctx: &mut TxContext) {
        let amount = coin::value(&token);
        coin::put(&mut claimer.balance, token);
    }

    // Stake SUI into the contract
    public entry fun stake(coin: &mut Coin<SUI>, amount: u64, ctx: &mut TxContext){
        assert!(coin.value() > 0, EInsufficientBalance);
        assert!(amount >= MinStaked, ENotEnoughTokenStaked);

        let splitted_coin = coin::split(coin, amount, ctx);

        let stake_account = StakeAccount{
            id: object::new(ctx),
            owner: ctx.sender(),
            balance: amount,
            staked: splitted_coin.into_balance(),
        };
        transfer::share_object(stake_account);
    }

    // Unstake SUI from the contract & claim KILAT balance
    public entry fun unstake(stake_account: &mut StakeAccount, claimer: &mut TokenManager, ctx: &mut TxContext){
        assert!(ctx.sender() == stake_account.owner, EUnauthorizedAccess);

        claim(claimer, ctx);
        let coin = coin::take(&mut stake_account.staked, stake_account.balance, ctx);
        transfer::public_transfer(coin, tx_context::sender(ctx));
    }

}