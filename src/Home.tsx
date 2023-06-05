function Home() {
    const pessoas = [
        {
          id: 1,
          name: 'Aryadne Fernanda Ronqui',
          softSkills: ['Empatia', 'Pró-atividade', 'Humildade'],
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          imageAlt: 'Foto da Aryadne',
        },
        {
          id: 2,
          name: 'Carla Regina Hentschel',
          softSkills: ['Dedicada', 'Sincera', 'Trata as pessoas de forma igual'],
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
          imageAlt: 'Foto da Carla',
        },
        {
          id: 3,
          name: 'Pedro Henrique Catarina Nogueira',
          softSkills: ['Paciente', 'Capacidade de autocontrole', 'Persistente'],
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
          imageAlt: 'Foto do Pedro',
        },
        {
          id: 4,
          name: 'Emilly Diedoviec',
          softSkills: ['Inteligente', 'Capacidade de aprender rápido', 'Bem-humorada'],
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
          imageAlt: 'Foto da Emilly',
        },
      ]
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Pessoas</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {pessoas.map((pessoa) => (
              <div key={pessoa.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={pessoa.imageSrc}
                    alt={pessoa.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-900">{pessoa.name}</h3>
                {pessoa.softSkills.map((soft) => (
                    <p key={soft} className="mt-1 text-md font-medium text-gray-700">{soft}</p>
                ))}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default Home;