function FooterFromZestyIframe() {
  return (
    <div>
      <style jsx>{`
        iframe {
          border: 0;
          outline: 0;
          width: 100%;
          height: 230px;
        }
      `}</style>
      <p>Footer Loaded from zesty</p>
      {/* <iframe src="https://123fmhwq-dev.preview.zesty.io/footer/"></iframe> */}
      <iframe src="api/zestyfooter"></iframe>
    </div>
  );
}

export default FooterFromZestyIframe;
