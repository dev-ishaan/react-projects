import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
          "source": { "id": null, "name": "Deadline" },
          "author": "Justin Kroll",
          "title": "Jeremy Renner Joins Daniel Craig In ‘Wake Up Dead Man: A Knives Out Mystery’ - Deadline",
          "description": "Jeremy Renner is set to join to join Daniel Craig in Netflix’s Wake Up Dead Man: A Knives Out Mystery'",
          "url": "http://deadline.com/2024/05/jeremy-renner-wake-up-dead-man-a-knives-out-mystery-1235943996/",
          "urlToImage": "https://deadline.com/wp-content/uploads/2024/05/jeremy-renner-daniel-craig.jpg?w=1024",
          "publishedAt": "2024-05-30T16:00:00Z",
          "content": "EXCLUSIVE: With the third season of Mayor of Kingstown bowing this Sunday, Jeremy Renner has found his next major movie project as the Oscar-nominated actor is set to join to join Daniel Craig in Net… [+1560 chars]"
        },
        {
          "source": { "id": null, "name": "Fox Business" },
          "author": "Eric Revell",
          "title": "US tells owners to stop driving older Nissan vehicles over air bag concerns - Fox Business",
          "description": "Nissan and the NHTSA are warning drivers of older Nissan vehicles that still have recalled Takata air bags not to drive until the air bags are repaired and replaced due to safety risks.",
          "url": "https://www.foxbusiness.com/lifestyle/us-tells-owners-stop-driving-older-nissan-vehicles-over-air-bag-concerns",
          "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/03/0/0/nissan-dealership.jpg?ve=1&tl=1",
          "publishedAt": "2024-05-30T15:25:00Z",
          "content": "Owners of nearly 84,000 older Nissan vehicles\r\n that are still equipped with recalled, unrepaired Takata air bags should immediately stop driving them due to a safety hazard, the National Highway Tra… [+2956 chars]"
        },
        {
          "source": { "id": "associated-press", "name": "Associated Press" },
          "author": "LINDSAY WHITEHURST",
          "title": "Supreme Court clears the way for the NRA's free speech lawsuit against an ex-New York official - The Associated Press",
          "description": "The Supreme Court has cleared the way for a National Rifle Association lawsuit against an ex-New York state official over claims she pressured companies to blacklist it following the 2018 Parkland, Florida, school shooting. Justice Sonia Sotomayor wrote Thurs…",
          "url": "https://apnews.com/article/nra-aclu-parkland-shooting-lawsuit-supreme-court-953424f3fd33f279b0cc2ce050069d48",
          "urlToImage": "https://dims.apnews.com/dims4/default/7688d2d/2147483647/strip/true/crop/4839x2722+0+252/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F78%2Fd0%2F1c171d4b9937522faae1864ecd23%2Fc065fadf04d14d869aa1d1b2a119f605",
          "publishedAt": "2024-05-30T14:41:00Z",
          "content": "WASHINGTON (AP) A unanimous Supreme Court on Thursday cleared the way for a National Rifle Association lawsuit against a former New York state official over claims she pressured companies to blacklis… [+3110 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Sarah Dean, David McKenzie",
          "title": "First results in South Africa’s election suggest it is heading for biggest political shift since apartheid - CNN",
          "description": "The early results declared in South Africa’s election suggest the ruling African National Congress (ANC) party could lose its majority for the first time in 30 years.",
          "url": "https://www.cnn.com/2024/05/30/africa/early-results-released-in-south-africas-election-intl/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/voting-20240529105245501.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-05-30T14:40:00Z",
          "content": "Johannesburg, South AfricaCNN\r\n  — \r\nEarly results from South Africas election suggest the ruling African National Congress (ANC) party could lose its majority for the first time in 30 years.\r\nWith r… [+2142 chars]"
        },
        {
          "source": { "id": "espn", "name": "ESPN" },
          "author": "Marcel Louis-Jacques",
          "title": "Sources - Dolphins, WR Jaylen Waddle agree to $84.75M extension - ESPN",
          "description": "The Dolphins and wide receiver Jaylen Waddle have reached an agreement on a three-year, $84.75 million contract extension that includes $76 million guaranteed, sources told ESPN.",
          "url": "https://www.espn.com/nfl/story/_/id/40244650/sources-dolphins-wr-jaylen-waddle-agree-8475m-extension",
          "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1117%2Fr1254144_1296x729_16%2D9.jpg",
          "publishedAt": "2024-05-30T14:09:00Z",
          "content": "MIAMI -- The Dolphins agreed to a contract extension Thursday with Jaylen Waddle that makes him one of the highest-paid wide receivers in the NFL.\r\nThe three-year, $84.75 million extension includes $… [+1944 chars]"
        }
      ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
        <>
        <h2 style={{textAlign: "center", margin:"5px"}}>NewsHub - Highlights</h2>
        <div className='container my-4'>
            <div className='row'>
                {this.state.articles.map((e)=>{
                    return(
                    <div className='col-md-4' style={{marginBottom: "20px"}} key={e.url}>
                    <NewsItem title={e.title.slice(0, 40)} description={e.description.slice(0, 70)} imageUrl={e.urlToImage} url={e.url}/>
                </div>
                )})}
                
            </div>
      </div>
      </>
    )
  }
}

export default News
