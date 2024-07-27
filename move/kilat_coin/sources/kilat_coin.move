module kilat_coin::kilat_coin {
  use sui::coin::{Self, Coin, TreasuryCap};
  use sui::url::{new_unsafe};

  public struct KILAT_COIN has drop {}

  fun init(witness: KILAT_COIN, ctx: &mut TxContext) {
    let (treasury, metadata) = coin::create_currency(witness, 3, b"KLT", b"KILAT", b"Kilat coin for Bridg3", option::some(new_unsafe(b"https://gateway.irys.xyz/sAgDLaiRa_TDJlfum6FCMMhEfTyjrbkdHBZgjz5onkA".to_ascii_string())), ctx);
    transfer::public_freeze_object(metadata);
    transfer::public_transfer(treasury, ctx.sender())
  }

  public fun mint(
    treasury_cap: &mut TreasuryCap<KILAT_COIN>, 
    amount: u64, 
    recipient: address, 
    ctx: &mut TxContext,
  ) {
    let coin = coin::mint(treasury_cap, amount, ctx);
    transfer::public_transfer(coin, recipient)
  }

  public entry fun burn(
    treasury_cap: &mut TreasuryCap<KILAT_COIN>,
    coin: &mut Coin<KILAT_COIN>,
    amount: u64,
    ctx: &mut TxContext
  ) {
    let coin_to_burn = coin::split(coin, amount, ctx);
    coin::burn(treasury_cap, coin_to_burn);
  }

  public entry fun transfer(
    coin: &mut Coin<KILAT_COIN>,
    amount: u64,
    recipient: address,
    ctx: &mut TxContext
  ) {
    let split_coin = coin::split(coin, amount, ctx);
    transfer::public_transfer(split_coin, recipient);
  }
}
