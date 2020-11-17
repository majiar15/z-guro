const epsModel = require('../model/epsModel');

exports.getAllEpsNoCovid = function(req, res){
    if(req.params.eps){
        const {eps} = req.params;
        epsModel.find({eps: eps, atiendeCovid:false}, (err, Findeps) =>{
            if(!Findeps){
                res.status(300).send("no se encontraron resultado que coincidan con ", eps);
            }else if(err){
                res.status(400).send("hubo un error en la peticion ", err);
            }else {
                res.status(200).send(Findeps);
            }
        });
    }else{
        res.status(400).send("no se mando el parametro de eps")

    }
}
exports.getAllEpsCovid = function(req, res){
    if(req.params.eps){
        const {eps} = req.params;
        epsModel.find({eps: eps, atiendeCovid:true}, (err, Findeps) =>{
            if(!Findeps){
                res.status(300).send("no se encontraron resultado que coincidan con ", eps);
            }else if(err){
                res.status(400).send("hubo un error en la peticion ", err);
            }else {
                res.status(200).send(Findeps);
            }
        });
    }else{
        res.status(400).send("no se mando el parametro de eps")

    }
}
exports.getOneEps = function(req, res) {
    if(req.params.id){
        const {id} = req.params;
        epsModel.findOne({_id: id}, (err, Findeps) =>{
            if(!Findeps){
                res.status(300).send("no se encontraron resultado que coincidan con ", eps);
            }else if(err){
                res.status(400).send("hubo un error en la peticion ", err);
            }else {
                res.status(200).send(Findeps);
            }
        });
    }else{
        res.status(400).send("no se mando el parametro de eps");

    }
}
