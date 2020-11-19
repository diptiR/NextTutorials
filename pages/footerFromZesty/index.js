import style from "./footerFromZesty.module.css";

function FooterFromZesty(props) {
  let cssCode = props.response.cssCode;
  function createMarkup() {
    return { __html: props.response.htmlCode };
  }
  return (
    <div className="footer">
      <style jsx>{` ${props.response.cssCode}`}</style>
      <br />
      <div>
        <h1>
          Footer From Zesty as custom json response and css with import
          statement
        </h1>
      </div>
      <br />
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://2bxd69w7-dev.preview.zesty.io/-/custom/users.json"
  );
  const response = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      response,
    },
  };
}

export default FooterFromZesty;
