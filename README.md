# weathereddit
Weathereddit is a menubar app that streamlines your morning routine. In one easy-to-use application, you can see the weather at a glance and get your daily dose of Reddit, limited to just 10 posts from the frontpage or your subreddit of choice, so your morning doesn't get away from you.

Walkthrough video: [https://www.youtube.com/watch?v=5R3iDTdIAe8](https://www.youtube.com/watch?v=5R3iDTdIAe8)

## How to Run

1) Create a [Wunderground API key](https://www.wunderground.com/weather/api/)

2) Create a config.js file in the js directory containing the following

```
var config = {
  key: 'your key here'
}
``` 

3) Run the following in your terminal
```
npm install electron-prebuilt -g
electron index.js
```

---

![](https://cloud.githubusercontent.com/assets/13595230/13693037/9915786e-e6fb-11e5-839e-8dcb28d8bac7.png)
