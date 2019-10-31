const lista = [
    {company: 'Vale IT', perfil1: '123'},
    {company: 'Vale IT', perfil1: '321'},
    {company: 'Vale IT', perfil1: '213'},
    {company: 'Vale', perfil1: '999'},
    {company: 'Vale', perfil1: '888'},
    {company: 'Vale', perfil1: '777'},
    {company: 'Vale', perfil1: '666'}
]

const perfil1 = lista.filter(function(perfil) {
    return lista.company === 'Vale IT';
})

export default perfil1;