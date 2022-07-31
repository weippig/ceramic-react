import { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking'
import { DIDSession } from '@glazed/did-session'

// check for a provider, then authenticate if the user has one injected:
export async function auth() {
  if (window.ethereum == null) {
      throw new Error('No injected Ethereum provider found')
  }
  await authenticateWithEthereum(window.ethereum)
}

// this function authenticates the user using SIWE
async function authenticateWithEthereum(ethereumProvider: any) {

  const accounts = await ethereumProvider.request({
    method: 'eth_requestAccounts',
  })

  const authProvider = new EthereumAuthProvider(ethereumProvider, accounts[0])

  const session = new DIDSession({ authProvider })
  console.log(session)

  const did = await session.authorize()
  
  console.log(did)
}
