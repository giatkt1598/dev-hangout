import TouristCardItem from "./components/TouristCardItem"

const data = [
  {
    title: "Santorini, Greece",
    imageUrl: "https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
    score: 4.4,
    review: 1200,
  },
  {
    title: "Moraine Lake, Canada",
    imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    score: 4.4,
    review: 1200,
  },
  {
    title: "Lake Thun, Switzerland",
    imageUrl: "https://www.w3schools.com/howto/img_forest.jpg",
    score: 4.4,
    review: 1200,
  },
]
function App() {
  return (
    <div>
      <h1 className="text-4xl font-medium text-center mt-20">Explore Top Destinations</h1>
      <h3 className="text-xs text-gray-500 text-center mt-7">
        Great Opportunities To Travel | Take a holiday | Visit Family | Enjoy Yourself</h3>
      <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mt-20">
        {
          data.map((item, idx) => (
            <TouristCardItem  key={idx}
              {...item}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
