// Immediately Invoked Function Expression(IIFE)

//Named IIFE -> Function have Name so 
(function Chai()
{
    console.log('Tusi Piyoge Two cup TEA?');
    //return 'Tusi Piyoge two cup TEA?'
})();

//UnNamed IIFE -> Function Without name
( (name) => {
    console.log(`${name},Tusi Piyoge Two cup TEA?`);
    //return 'Tusi Piyoge two cup TEA?'
})('Krushna')


