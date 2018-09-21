import halfMummy from './characters/halfMummy.png'
import moustaches from './characters/moustaches.png'
import openMindZombie from './characters/openMindZombie.png'
import wizard from './characters/wizard.png'
import chips from './characters/chips.png'
import cowboy from './characters/cowboy.png'
import green from './characters/green.png'
import pickle from './characters/pickle.png'
import pirate from './characters/pirate.png'
import santa from './characters/santa.png'


export const getMedia = (avatar) => {
  const url = Object.keys(avatar)
  const code = Object.keys((avatar[url]))
  const ext = Object.keys((avatar[url][code]))
  return url + '.' + code + '.' + ext
}

export const getCharactersList = () => {
  return [halfMummy, moustaches, openMindZombie, wizard, santa, pirate, pickle, green, cowboy, chips]
}


export const getRandomCharacter = () => getCharactersList()[Math.floor(Math.random() * getCharactersList().length) + 1]