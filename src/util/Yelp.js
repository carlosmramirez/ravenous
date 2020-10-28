const apiKey = 'mZRrayX7EbnoM78Y52vv4scZs6Qgyfn8xEw9k-5AKwiAuXEd1yS6aaXGEeEwkEHSSIEFkIxYnLPo8GhTjkIxwXkK-zcUhsWcqHnU5755OZRAbZhOgZaW7BapOEeYX3Yx';
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          console.log(business)
          console.log(Array.isArray(business.categories))
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      } else {
        console.log('API fetch Error');
      }
    });
  }
};

export default Yelp;