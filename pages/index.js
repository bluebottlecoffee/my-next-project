function Home({ allPreparationGuides }) {
  return (
    <div>
      {allPreparationGuides.map(preparationGuide => {
        return (
          <>
            <div>
              I am a new feature branch
            </div>
            <div>
              <div>{preparationGuide.name}</div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export async function getStaticProps({ params }) {
  const data = await fetch('https://eo9501mu.apicdn.sanity.io/v1/graphql/production/default', {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'post',
    body: JSON.stringify({
      query: `{
        allPreparationGuide {
          _id
          name
        }
      }`
    })
  }).then(function(response) {
    return response.json();
  })

  return {
    props: {
      allPreparationGuides: data.data.allPreparationGuide
    }
  }
}

export default Home
