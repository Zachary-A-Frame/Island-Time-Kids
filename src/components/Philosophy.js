import React from 'react'

function Philosophy() {
  return (
    <div className="body-container-title" id="philosophy-anchor">
      <h3 className="body-container-text">Program Philosophy</h3>
      <h5 className="body-container-text">
        A special place where kids can learn, play, create, explore, wonder and
        discover
      </h5>
      <p>
        {" "}
        Island Time Kids is a children’ s outreach program of{" "}
        <a
          href="https://islandtimeministries.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Island Time Ministries.{" "}
        </a>{" "}
        Our mission is to provide high quality, affordable activities for
        school-aged children in a safe and nurturing environment. Life is full
        of choices. Allowing children to choose the activities they love helps
        children develop good social skills, build character, and learn about
        themselves. Our program allows children to experience a variety of
        activities that stimulates the creativity and individuality of each
        child. Helping each child to develop the characteristic of kindness,
        compassion, generosity, patience, forgiveness, and self-control is a
        priority.
      </p>
    </div>
  );
}

export { Philosophy as default}