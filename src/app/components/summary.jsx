import React from 'react';

const Summary = ({heading, summary }) => {
  return (
    <>
      <section>
        <h2 className="custom-h2 text-fontColor-sub-heading">{heading}</h2>
        <p className='custom-base text-fontColor-primary '>
          {summary}
        </p>
      </section>
    </>
  );
};

export default Summary;
