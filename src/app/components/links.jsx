import React from 'react'
import InstaIcon from '@/assets/icons/instagram.svg'
import LinkIcon from '@/assets/icons/linkedin.svg'
import XIcon from '@/assets/icons/x.svg'
// import DribbleIcon from '@/assets/icons/dribble.svg'
import FbIcon from '@/assets/icons/facebook.svg'
import Link from 'next/link'

const Links = ({ description, links }) => {
  const icons = {
    facebook: <FbIcon />,
    instagram: <InstaIcon />,
    x: <XIcon />,
    // dribble: <DribbleIcon />,
    linkedin: <LinkIcon />,
  };

  return (
    <div>
      <h2 className="custom-h2">Links</h2>
      <div>
        <p className="custom-base text-fontColor-primary font-normal mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2">
          {links.map(({ platform, url }) => (
            <li key={platform} className="px-3 py-1 hover:scale-75">
              <Link href={url}>{icons[platform]}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Links;
