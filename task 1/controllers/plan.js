var Sub=require('../models/sub');

exports.initial=function(req, res, next) {
    if(req.session.name==undefined)
        res.redirect('/');
    else
        res.render('plan', { title: 'Classo Plans' });
  }

exports.update=function(req, res, next) {
    Sub.findOneAndUpdate({ email:req.session.name},{users:req.body.count,
        amount:req.body.amount,
        subscription:req.body.sub},function(err,doc){
            if(err)
                res.json({status:false,message:"Unable to update"});
            else
                res.json({status:true,message:"Subscription changed successfully"});
        })
}

exports.logout = function(req,res,next){
    req.session.destroy(function(err){
        res.redirect('/')
    })
}

exports.sub=function(req,res,next){
    let sub=new Sub({email:req.session.name,
        users:req.body.count,
        amount:req.body.amount,
        subscription:req.body.sub})
        Sub.findOne({email:req.session.name},function(err,doc){
            if(doc)
                res.json({status:false,pending:true});
            else
            {
                sub.save(function (err, user) {
                    if(err)
                        res.json({status:false,message:"Error while saving data"});
                    else
                        res.json({status:true,message:"Subscribed successfully"});
                })
            }
        });
}