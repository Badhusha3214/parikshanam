"use client";


import Button from "../../ui/Button";
import LocationIcon from '@/assets/icons/location.svg';
import PhoneIcon from '@/assets/icons/call.svg';
import ShareIcon from '@/assets/icons/share.svg';
import MessageIcon from '@/assets/icons/message.svg';

export default function ProfileCard({ member }) {
  const handlePhoneClick = () => {
    window.location.href = `tel:${member.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${member.email}`;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: member.name,
          text: `Check out ${member.name}'s profile`,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="h-80 lg:h-96 bg-brand overflow-hidden">
        <img
          src="https://s3-alpha-sig.figma.com/img/9813/76c1/8a144ad0fd48ff188ce22851d9fecf54?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q-hU7wHKewnFTUJW8NK8B4cEQU6522EwIg97-OFncFSY7EsYKEA6dNdGG5fi3o1JvFk6lxrI0xmnwfyqdCwjedX1-WlbXpjPLiKvNhUKTZuN5nWqeNRuSYZdhfwYFahAUA4VzojjGa56zlWDNWVekRJvNzN9PTbQkbX6U4z0QfDXq9HNx405t1S8JBtoDchG4LM7~cTgghioleb3301GYEXCOo1e8n9Pmr~iPFYDPVKLcMXlKB5fz2Ebq89Q6ZeWooCUVF0vtLq70TpI9B~xQ7FSFbeWcPa5tVuhaKKKCWXOIn9MAGp1kS9iaizIt9pJM2iM9lZ4uxpcFCkQeUmFfQ__"
          alt="Profile banner"
          className="w-full  h-full object-cover"
        />
      </div>
      <div className="px-section ">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0 mx-auto">
            <div className="w-44 h-44 lg:h-72 lg:w-72 -mt-20 sm:-mt-14 rounded-full overflow-hidden border-2 border-[#1F1F1F1A]">
              <img
                src={member.avatar}
                alt={`${member.name}'s profile picture`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-grow">
            <div className="space-y-1 ">
              <h1 className="custom-h1 text-fontColor-heading font-bold pt-5 md:pt-5">
                {member.name}
              </h1>
              <p className="custom-h3 font-normal text-fontColor-tertiary">{member.company}</p>
              <div className="flex items-center  py-1">
                <LocationIcon className="mr-2 text-brand" />
                <span className="custom-base font-normal text-fontColor-primary">
                  {member.address.city}, {member.address.state}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Button onClick={handlePhoneClick} size="md">
                <PhoneIcon className="mr-2" />
                {member.phone}
              </Button>
              <Button onClick={handleEmailClick} size="md">
                <MessageIcon className="w-[18px] h-[18px]" />
              </Button>
              <Button onClick={handleShare} className='hover:bg-brand-subtle' variant="secondary" size="md">
                <ShareIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
