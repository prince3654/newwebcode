import Card from './Card';

function Tour({tours,removeTour}) {
  console.log(tours)
  return (
    <div>
      <div className='dotBox'>
        <h1 className='title'> Plan with Love </h1>
      </div>
    <div className='cards'>
            {
                tours.map((tour)=>{
                    return <Card key={tour.id}{...tour} removeTour= {removeTour}></Card>
                })
            }
    </div>    
    </div>
  );
}

export default Tour;
