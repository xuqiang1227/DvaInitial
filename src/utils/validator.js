export const checkUsername = (name) => {
  if (name.length === 0 || name.length > 15) {
    return '用户名必须为1-15个字'
  }
  return ''
}

