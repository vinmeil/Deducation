import { SuiGraphQLClient } from '@mysten/sui/graphql';
import { graphql } from '@mysten/sui/graphql/schemas/2024.4';

const gqlClient = new SuiGraphQLClient({
    url: 'https://sui-testnet.mystenlabs.com/graphql',
});

// Call GraphQL RPC to get all objects containing SUI Tokens:
export const getSuiAccounts = async (wallet:string) => {
    if(wallet){
        const chainIdentifierQuery = graphql(`
            query {
                address(address: "${wallet}") {
                    coins(
                    first: 5,
                    type: "0x2::sui::SUI"
                    ) {
                    nodes {
                        address
                    }
                    }
                }
            }
        `);
        //Call Method From RPC
        const result = await gqlClient.query({
            query: chainIdentifierQuery,
        });
        const suiAccounts = result.data?.address?.coins?.nodes;    
        if(suiAccounts){
            return suiAccounts;
        }
    }
    return [];
}