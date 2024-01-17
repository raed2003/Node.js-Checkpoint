const passwordgenerate=require('password-generate');
function passwordgenerator(){
    const password=passwordgenerate.generate({
        length: 10,
        numbers: true,
        uppercase: true,
        symbols: true,
        lowercase:true,
    })
    console.log(password)
}
passwordgenerator()