export const getMedia = (avatar) => {
  console.log("AVATAR: "+avatar)
  const url = Object.keys(avatar)
  const code = Object.keys((avatar[url]))
  const ext = Object.keys((avatar[url][code]))
  return url + '.' + code + '.' + ext
}