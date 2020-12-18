function Home({ allPreparationGuides }) {
  const guides = allPreparationGuides.map((guide) =>
    <article className="preparationGuide">
      <h2>
        {guide.name}
      </h2>
      <img src={guide.headerImage.asset.url} alt="an image" />
      <p>
        {guide.summary}
      </p>
    </article>
  )

  return (
    <div id="preparationGuides">
      {guides}
    </div>
  )
}

export async function getStaticProps({ params }) {
  const query = `{
    allPreparationGuide {
      _id
      headerImage {
        asset {
          url
        }
      }
      name
      summary
    }
  }`

  const resp = await fetch('https://eo9501mu.apicdn.sanity.io/v1/graphql/production/default', {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'post',
    body: JSON.stringify({ query })
  }).then(function (response) {
    return response.json()
  })

  const allPreparationGuides = resp.data.allPreparationGuide

  return {
    props: { allPreparationGuides }
  }
}

export default Home
