const product = {
    productId: 101,
    productName: "MacBook Pro",
    productPrice: 1499,
    productCategory: "Electronics",
  
    productReviews: [
      {
        reviewId: 1,
        userName: "Sayem",
        rating: 5,
        comment: "Excellent laptop",
        date: "2026-09-12"
      },
      {
        reviewId: 2,
        userName: "John",
        rating: 4,
        comment: "Good performance",
        date: "2026-09-07"
      },
      {
        reviewId: 3,
        userName: "Alex",
        rating: 3,
        comment: "Good but expensive",
        date: "2026-09-08"
      }
    ]
    
  };
//  

  for (items in product)
     console.log(`${items} : ${product[items]}`);
    //console.log(items, ":", product[items]);


const fivestarReviews= product.productReviews.filter((review) => review.rating===5);
// console.log(fivestarReviews);

let todays_date= product.productReviews.filter((item)=> item.date=== "2026-09-12");
console.log(todays_date);