
// index
const index = async (req,res) => {
    return res.render('index.pug')
}

// upload'
const upload = async (req,res) => {
    return res.render('fileUpload.pug')
}

//pnf
const pnf = async (req,res) => {
    return res.render('pnf.pug')
}

module.exports = { index, upload, pnf }