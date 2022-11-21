import CryptoJS from 'crypto-js'

export function useCrypt(publicKey: string) {
  /**公钥 */
  const key = CryptoJS.enc.Utf8.parse(publicKey)
  /**配置 */
  const option = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }

  /**ESC加密 */
  const encrypt = (str: string | number) => {
    return CryptoJS.AES.encrypt(`${str}`, key, option).toString()
  }
  return { encrypt }
}
