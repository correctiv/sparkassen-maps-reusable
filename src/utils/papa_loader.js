import Papa from 'papaparse'
import Promise from 'promise-polyfill'


function loadCsv(dataUrl) {
  return new Promise((resolve, reject) => {
    Papa.parse(dataUrl, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (res) => {
        resolve(res.data)
      },
      error: (err, file) => {
        reject(new Error('PapaParse: couldn\'t get file: '+err))
      }
    })
  })
}


export default loadCsv
