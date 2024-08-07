import LinkGridCard from "./LinkGridCard";

function LinkGrid() {

  const links = [
    {
      title: "Youtube",
      description: "see this playlist",
      link: "https://www.youtube.com/watch?v=ot0n01IxZxg&list=RDot0n01IxZxg&start_radio=1",
    },
    {
      title: "Pics of Us",
      description: "Feeling Down? Check these.",
      link: "https://photos.google.com/share/AF1QipMX1oIiWswwXukE9bWB7tk2a2nibCqYPGEThj_BhjqOUasNKbCjdobCfVxEZgywZg?key=Y0Q3THhjOGF0N1NTNTVvc1NRdlp0MldLOUVvdkZR",
    },
    {
      title: "Zomato",
      description: "Hungry? Feeling Lazy? Check this.",
      link: "https://www.zomato.com/ncr/delivery",
    },
  ];


  return <><div className="grid">
    {links.map(link => <LinkGridCard title={link.title} description={link.description} link={link.link} />)}
  </div>
    <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        `}</style>
  </>
}

export default LinkGrid;