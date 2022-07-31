import { DIDDataStore } from '@glazed/did-datastore'
import CeramicClientHelper from './helper/CeramicHelper'
import { IBasicProfile } from './interface/dataModel'
import { IDX } from '@ceramicstudio/idx'
import { tryAuthenticate } from './3id';

function initializeDatastore() {
  const ceramic = CeramicClientHelper.getInstance()
  console.log(ceramic)
  const aliases = {
    schemas: {
        basicProfile: 'ceramic://k3y52l7qbv1frxt706gqfzmq6cbqdkptzk8uudaryhlkf6ly9vx21hqu4r6k1jqio',

    },
    definitions: {
        BasicProfile: 'kjzl6cwe1jw145cjbeko9kil8g9bxszjhyde21ob8epxuxkaon1izyqsu8wgcic',
    },
    tiles: {},
  }
  
  return new DIDDataStore({ ceramic, model: aliases })
}

export async function getBasicProfile() {
  const ceramic = CeramicClientHelper.getInstance()
  if( !ceramic.did ) {
    alert('請先點擊右上角連線錢包')
    return 
  }
  let dataStore = initializeDatastore()
  return(
    await dataStore.get('BasicProfile', ceramic.did!.id)
  )
}


export async function updateBasicProfile(basicProfile: IBasicProfile){
  const ceramic = CeramicClientHelper.getInstance()
  if( !ceramic.did ) {
    alert('請先點擊右上角連線錢包')
    return 
  }
  let dataStore = initializeDatastore()
  return(
    await dataStore.merge('BasicProfile', basicProfile)
  )
}