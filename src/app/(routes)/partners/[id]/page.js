"use client";

import Characteristics from "@/app/components/characterisitics";
import Links from "@/app/components/links";
import Summary from "@/app/components/summary";
import { ModelList } from "@/app/components/model-coordinators/coordinator/model-list";
import ShowReel from "@/app/components/show-reel";
import { fetchCoordinatorById } from "@/app/lib/coordinators";
import { useParams } from "next/navigation";
import { Works } from "@/app/components/works";
import { Gallery } from "@/app/components/gallary";
import ProfileCard from "@/app/components/partners/partner/partner-profile";

const page = ({ params }) => {
  const { id } = useParams();

  const coordinator = fetchCoordinatorById(id);

  if (!coordinator) {
    return <p>Coordinator not found!</p>;
  }

  const models = [
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/f8fd/bb68/faec2aa94f06982afe25b60918338464?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0PTx1gMzZnG-oIJIWrBdVGDEijEbQhMRpYB7QJ5tcttSmCo5oKJdU803ipz~B00FfJ~Bj3yTqS8AC~SaImJo7PyF-fUjKZl9amyLTZgdCDomCaY-FauCrtY3dh9qnZzRlNpSbFb2etaa2aLF3hjV7-YZFmrhotzryONpJb9i9c~-qPFR5TYRvH3f5lb50nYamqO~ayar5m~9J~tYDpl0s6TEJeln2CbTzFYPWFgm9B6RzWwNxucNMHwatB8S86cGeis9Y8aUXZTNlZlfZ30xqO5eeFWOTsTLcWvSYg6X8eMbzsJyD9~VA5KxYBKs5SGLlmPJJQB9T4UdpVG1xB8QA__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/852f/4c5f/37f71c5b08f3319f3710a4de780af777?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hn4EQLH17w0Ei8U8MT-K~Y0cQla5ZCEpEyEBpe-a3pyhcronBG4k3YOZ0xVQEcVZtJWEoEalK78-XcsHGun7B1TlY9Zltt-jE-QxofiXhgkeYVYm7yfoU30-8PhYneBP6-8KUezHH1O9IIlIpGuUzDZUF2Plxzvf-44WomFg1Wt-sLllJ7kpjIz~JZkdaqmv8qj5mN1gl9Fv5eOAj2Rwaw7Z4jO0QV5Xepb3VacGOG9rwBu~~NbI2WSrJdklJF2orRm1evuhwlgjgQTKu-aRgC3njgrsOGx0YyMPitgy3OIFqvK4ug4em-iqHwNqxzqKVakfUZxgPWhpiWBMVBTK7w__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/8cbb/e9c4/82a36303aa744fcac322ef2c7fa7a5dc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XLeY-k4By1b3LqQFCpIr5Y-UavD8Scar3WLpw8DaHx8AH8ePi-ZoRGUgOsllWq1Eyv47lPS40yB8SoMAfDPe3ykO1Fhhs1WkTDSYlXSaog6E0S~tGNX0EVlYemH4hT~Vn3ytQyUbIx8yrbMJoyNZigHjGnSccFem2C62CEWcyvPg778IK0wUH~PyrNWSYuhTe~wgnyLSZ658GMm3B~3R5afCJ3b4om2QLLwbtydKf6k4Jx6HyQ-~l2SZJ3JA7bIz5JBnfrF81bK1CgD~OND9ssjXffagMaHGtRv~0IxlhCvFfnavX8N~cE-VL1fameSJBg-NwxvqUHCaGD0I2mW1Jw__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/f1d7/5dbf/7933756b7f7be667da7b59f13b6b2e83?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PqKwHu1baaJVY7jroU~3VAEa3xqRjfaeH22cxtKjDaxyWUXeWdhTAB2mkGgy6MSlo2QOfqHT-YYPh8aK6emo9qQ~lp77~TZ6kruuw3NKPIVBERR35eDlKEaEmf7XarELkuklMqZiV06RdMfAwPLdhQLxoZBWmWaT1sLmCaDJm~kHRi9UiKc2wUwzJtXbiYFzVyt3kRA5SolCZOmuVfxkC8lJ-y4uZGYL1SKIVrzMRktZ3lIOxlk4jjh3c3cKNGB~j2hFcpUwZJAklew2buIvrcpCeTA3nXZUdhmL8OZUvQPs~0fFACDscTR7BGp9X~Ae3UUEbjUr8zF5G2MEp2JtqA__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/f8fd/bb68/faec2aa94f06982afe25b60918338464?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0PTx1gMzZnG-oIJIWrBdVGDEijEbQhMRpYB7QJ5tcttSmCo5oKJdU803ipz~B00FfJ~Bj3yTqS8AC~SaImJo7PyF-fUjKZl9amyLTZgdCDomCaY-FauCrtY3dh9qnZzRlNpSbFb2etaa2aLF3hjV7-YZFmrhotzryONpJb9i9c~-qPFR5TYRvH3f5lb50nYamqO~ayar5m~9J~tYDpl0s6TEJeln2CbTzFYPWFgm9B6RzWwNxucNMHwatB8S86cGeis9Y8aUXZTNlZlfZ30xqO5eeFWOTsTLcWvSYg6X8eMbzsJyD9~VA5KxYBKs5SGLlmPJJQB9T4UdpVG1xB8QA__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/852f/4c5f/37f71c5b08f3319f3710a4de780af777?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hn4EQLH17w0Ei8U8MT-K~Y0cQla5ZCEpEyEBpe-a3pyhcronBG4k3YOZ0xVQEcVZtJWEoEalK78-XcsHGun7B1TlY9Zltt-jE-QxofiXhgkeYVYm7yfoU30-8PhYneBP6-8KUezHH1O9IIlIpGuUzDZUF2Plxzvf-44WomFg1Wt-sLllJ7kpjIz~JZkdaqmv8qj5mN1gl9Fv5eOAj2Rwaw7Z4jO0QV5Xepb3VacGOG9rwBu~~NbI2WSrJdklJF2orRm1evuhwlgjgQTKu-aRgC3njgrsOGx0YyMPitgy3OIFqvK4ug4em-iqHwNqxzqKVakfUZxgPWhpiWBMVBTK7w__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/8cbb/e9c4/82a36303aa744fcac322ef2c7fa7a5dc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XLeY-k4By1b3LqQFCpIr5Y-UavD8Scar3WLpw8DaHx8AH8ePi-ZoRGUgOsllWq1Eyv47lPS40yB8SoMAfDPe3ykO1Fhhs1WkTDSYlXSaog6E0S~tGNX0EVlYemH4hT~Vn3ytQyUbIx8yrbMJoyNZigHjGnSccFem2C62CEWcyvPg778IK0wUH~PyrNWSYuhTe~wgnyLSZ658GMm3B~3R5afCJ3b4om2QLLwbtydKf6k4Jx6HyQ-~l2SZJ3JA7bIz5JBnfrF81bK1CgD~OND9ssjXffagMaHGtRv~0IxlhCvFfnavX8N~cE-VL1fameSJBg-NwxvqUHCaGD0I2mW1Jw__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/f1d7/5dbf/7933756b7f7be667da7b59f13b6b2e83?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PqKwHu1baaJVY7jroU~3VAEa3xqRjfaeH22cxtKjDaxyWUXeWdhTAB2mkGgy6MSlo2QOfqHT-YYPh8aK6emo9qQ~lp77~TZ6kruuw3NKPIVBERR35eDlKEaEmf7XarELkuklMqZiV06RdMfAwPLdhQLxoZBWmWaT1sLmCaDJm~kHRi9UiKc2wUwzJtXbiYFzVyt3kRA5SolCZOmuVfxkC8lJ-y4uZGYL1SKIVrzMRktZ3lIOxlk4jjh3c3cKNGB~j2hFcpUwZJAklew2buIvrcpCeTA3nXZUdhmL8OZUvQPs~0fFACDscTR7BGp9X~Ae3UUEbjUr8zF5G2MEp2JtqA__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/f8fd/bb68/faec2aa94f06982afe25b60918338464?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0PTx1gMzZnG-oIJIWrBdVGDEijEbQhMRpYB7QJ5tcttSmCo5oKJdU803ipz~B00FfJ~Bj3yTqS8AC~SaImJo7PyF-fUjKZl9amyLTZgdCDomCaY-FauCrtY3dh9qnZzRlNpSbFb2etaa2aLF3hjV7-YZFmrhotzryONpJb9i9c~-qPFR5TYRvH3f5lb50nYamqO~ayar5m~9J~tYDpl0s6TEJeln2CbTzFYPWFgm9B6RzWwNxucNMHwatB8S86cGeis9Y8aUXZTNlZlfZ30xqO5eeFWOTsTLcWvSYg6X8eMbzsJyD9~VA5KxYBKs5SGLlmPJJQB9T4UdpVG1xB8QA__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/852f/4c5f/37f71c5b08f3319f3710a4de780af777?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hn4EQLH17w0Ei8U8MT-K~Y0cQla5ZCEpEyEBpe-a3pyhcronBG4k3YOZ0xVQEcVZtJWEoEalK78-XcsHGun7B1TlY9Zltt-jE-QxofiXhgkeYVYm7yfoU30-8PhYneBP6-8KUezHH1O9IIlIpGuUzDZUF2Plxzvf-44WomFg1Wt-sLllJ7kpjIz~JZkdaqmv8qj5mN1gl9Fv5eOAj2Rwaw7Z4jO0QV5Xepb3VacGOG9rwBu~~NbI2WSrJdklJF2orRm1evuhwlgjgQTKu-aRgC3njgrsOGx0YyMPitgy3OIFqvK4ug4em-iqHwNqxzqKVakfUZxgPWhpiWBMVBTK7w__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/8cbb/e9c4/82a36303aa744fcac322ef2c7fa7a5dc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XLeY-k4By1b3LqQFCpIr5Y-UavD8Scar3WLpw8DaHx8AH8ePi-ZoRGUgOsllWq1Eyv47lPS40yB8SoMAfDPe3ykO1Fhhs1WkTDSYlXSaog6E0S~tGNX0EVlYemH4hT~Vn3ytQyUbIx8yrbMJoyNZigHjGnSccFem2C62CEWcyvPg778IK0wUH~PyrNWSYuhTe~wgnyLSZ658GMm3B~3R5afCJ3b4om2QLLwbtydKf6k4Jx6HyQ-~l2SZJ3JA7bIz5JBnfrF81bK1CgD~OND9ssjXffagMaHGtRv~0IxlhCvFfnavX8N~cE-VL1fameSJBg-NwxvqUHCaGD0I2mW1Jw__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/f1d7/5dbf/7933756b7f7be667da7b59f13b6b2e83?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PqKwHu1baaJVY7jroU~3VAEa3xqRjfaeH22cxtKjDaxyWUXeWdhTAB2mkGgy6MSlo2QOfqHT-YYPh8aK6emo9qQ~lp77~TZ6kruuw3NKPIVBERR35eDlKEaEmf7XarELkuklMqZiV06RdMfAwPLdhQLxoZBWmWaT1sLmCaDJm~kHRi9UiKc2wUwzJtXbiYFzVyt3kRA5SolCZOmuVfxkC8lJ-y4uZGYL1SKIVrzMRktZ3lIOxlk4jjh3c3cKNGB~j2hFcpUwZJAklew2buIvrcpCeTA3nXZUdhmL8OZUvQPs~0fFACDscTR7BGp9X~Ae3UUEbjUr8zF5G2MEp2JtqA__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/f8fd/bb68/faec2aa94f06982afe25b60918338464?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0PTx1gMzZnG-oIJIWrBdVGDEijEbQhMRpYB7QJ5tcttSmCo5oKJdU803ipz~B00FfJ~Bj3yTqS8AC~SaImJo7PyF-fUjKZl9amyLTZgdCDomCaY-FauCrtY3dh9qnZzRlNpSbFb2etaa2aLF3hjV7-YZFmrhotzryONpJb9i9c~-qPFR5TYRvH3f5lb50nYamqO~ayar5m~9J~tYDpl0s6TEJeln2CbTzFYPWFgm9B6RzWwNxucNMHwatB8S86cGeis9Y8aUXZTNlZlfZ30xqO5eeFWOTsTLcWvSYg6X8eMbzsJyD9~VA5KxYBKs5SGLlmPJJQB9T4UdpVG1xB8QA__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/852f/4c5f/37f71c5b08f3319f3710a4de780af777?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hn4EQLH17w0Ei8U8MT-K~Y0cQla5ZCEpEyEBpe-a3pyhcronBG4k3YOZ0xVQEcVZtJWEoEalK78-XcsHGun7B1TlY9Zltt-jE-QxofiXhgkeYVYm7yfoU30-8PhYneBP6-8KUezHH1O9IIlIpGuUzDZUF2Plxzvf-44WomFg1Wt-sLllJ7kpjIz~JZkdaqmv8qj5mN1gl9Fv5eOAj2Rwaw7Z4jO0QV5Xepb3VacGOG9rwBu~~NbI2WSrJdklJF2orRm1evuhwlgjgQTKu-aRgC3njgrsOGx0YyMPitgy3OIFqvK4ug4em-iqHwNqxzqKVakfUZxgPWhpiWBMVBTK7w__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/8cbb/e9c4/82a36303aa744fcac322ef2c7fa7a5dc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XLeY-k4By1b3LqQFCpIr5Y-UavD8Scar3WLpw8DaHx8AH8ePi-ZoRGUgOsllWq1Eyv47lPS40yB8SoMAfDPe3ykO1Fhhs1WkTDSYlXSaog6E0S~tGNX0EVlYemH4hT~Vn3ytQyUbIx8yrbMJoyNZigHjGnSccFem2C62CEWcyvPg778IK0wUH~PyrNWSYuhTe~wgnyLSZ658GMm3B~3R5afCJ3b4om2QLLwbtydKf6k4Jx6HyQ-~l2SZJ3JA7bIz5JBnfrF81bK1CgD~OND9ssjXffagMaHGtRv~0IxlhCvFfnavX8N~cE-VL1fameSJBg-NwxvqUHCaGD0I2mW1Jw__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/f1d7/5dbf/7933756b7f7be667da7b59f13b6b2e83?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PqKwHu1baaJVY7jroU~3VAEa3xqRjfaeH22cxtKjDaxyWUXeWdhTAB2mkGgy6MSlo2QOfqHT-YYPh8aK6emo9qQ~lp77~TZ6kruuw3NKPIVBERR35eDlKEaEmf7XarELkuklMqZiV06RdMfAwPLdhQLxoZBWmWaT1sLmCaDJm~kHRi9UiKc2wUwzJtXbiYFzVyt3kRA5SolCZOmuVfxkC8lJ-y4uZGYL1SKIVrzMRktZ3lIOxlk4jjh3c3cKNGB~j2hFcpUwZJAklew2buIvrcpCeTA3nXZUdhmL8OZUvQPs~0fFACDscTR7BGp9X~Ae3UUEbjUr8zF5G2MEp2JtqA__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/f8fd/bb68/faec2aa94f06982afe25b60918338464?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0PTx1gMzZnG-oIJIWrBdVGDEijEbQhMRpYB7QJ5tcttSmCo5oKJdU803ipz~B00FfJ~Bj3yTqS8AC~SaImJo7PyF-fUjKZl9amyLTZgdCDomCaY-FauCrtY3dh9qnZzRlNpSbFb2etaa2aLF3hjV7-YZFmrhotzryONpJb9i9c~-qPFR5TYRvH3f5lb50nYamqO~ayar5m~9J~tYDpl0s6TEJeln2CbTzFYPWFgm9B6RzWwNxucNMHwatB8S86cGeis9Y8aUXZTNlZlfZ30xqO5eeFWOTsTLcWvSYg6X8eMbzsJyD9~VA5KxYBKs5SGLlmPJJQB9T4UdpVG1xB8QA__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/852f/4c5f/37f71c5b08f3319f3710a4de780af777?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hn4EQLH17w0Ei8U8MT-K~Y0cQla5ZCEpEyEBpe-a3pyhcronBG4k3YOZ0xVQEcVZtJWEoEalK78-XcsHGun7B1TlY9Zltt-jE-QxofiXhgkeYVYm7yfoU30-8PhYneBP6-8KUezHH1O9IIlIpGuUzDZUF2Plxzvf-44WomFg1Wt-sLllJ7kpjIz~JZkdaqmv8qj5mN1gl9Fv5eOAj2Rwaw7Z4jO0QV5Xepb3VacGOG9rwBu~~NbI2WSrJdklJF2orRm1evuhwlgjgQTKu-aRgC3njgrsOGx0YyMPitgy3OIFqvK4ug4em-iqHwNqxzqKVakfUZxgPWhpiWBMVBTK7w__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/8cbb/e9c4/82a36303aa744fcac322ef2c7fa7a5dc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XLeY-k4By1b3LqQFCpIr5Y-UavD8Scar3WLpw8DaHx8AH8ePi-ZoRGUgOsllWq1Eyv47lPS40yB8SoMAfDPe3ykO1Fhhs1WkTDSYlXSaog6E0S~tGNX0EVlYemH4hT~Vn3ytQyUbIx8yrbMJoyNZigHjGnSccFem2C62CEWcyvPg778IK0wUH~PyrNWSYuhTe~wgnyLSZ658GMm3B~3R5afCJ3b4om2QLLwbtydKf6k4Jx6HyQ-~l2SZJ3JA7bIz5JBnfrF81bK1CgD~OND9ssjXffagMaHGtRv~0IxlhCvFfnavX8N~cE-VL1fameSJBg-NwxvqUHCaGD0I2mW1Jw__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/f1d7/5dbf/7933756b7f7be667da7b59f13b6b2e83?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PqKwHu1baaJVY7jroU~3VAEa3xqRjfaeH22cxtKjDaxyWUXeWdhTAB2mkGgy6MSlo2QOfqHT-YYPh8aK6emo9qQ~lp77~TZ6kruuw3NKPIVBERR35eDlKEaEmf7XarELkuklMqZiV06RdMfAwPLdhQLxoZBWmWaT1sLmCaDJm~kHRi9UiKc2wUwzJtXbiYFzVyt3kRA5SolCZOmuVfxkC8lJ-y4uZGYL1SKIVrzMRktZ3lIOxlk4jjh3c3cKNGB~j2hFcpUwZJAklew2buIvrcpCeTA3nXZUdhmL8OZUvQPs~0fFACDscTR7BGp9X~Ae3UUEbjUr8zF5G2MEp2JtqA__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/f8fd/bb68/faec2aa94f06982afe25b60918338464?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0PTx1gMzZnG-oIJIWrBdVGDEijEbQhMRpYB7QJ5tcttSmCo5oKJdU803ipz~B00FfJ~Bj3yTqS8AC~SaImJo7PyF-fUjKZl9amyLTZgdCDomCaY-FauCrtY3dh9qnZzRlNpSbFb2etaa2aLF3hjV7-YZFmrhotzryONpJb9i9c~-qPFR5TYRvH3f5lb50nYamqO~ayar5m~9J~tYDpl0s6TEJeln2CbTzFYPWFgm9B6RzWwNxucNMHwatB8S86cGeis9Y8aUXZTNlZlfZ30xqO5eeFWOTsTLcWvSYg6X8eMbzsJyD9~VA5KxYBKs5SGLlmPJJQB9T4UdpVG1xB8QA__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/852f/4c5f/37f71c5b08f3319f3710a4de780af777?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hn4EQLH17w0Ei8U8MT-K~Y0cQla5ZCEpEyEBpe-a3pyhcronBG4k3YOZ0xVQEcVZtJWEoEalK78-XcsHGun7B1TlY9Zltt-jE-QxofiXhgkeYVYm7yfoU30-8PhYneBP6-8KUezHH1O9IIlIpGuUzDZUF2Plxzvf-44WomFg1Wt-sLllJ7kpjIz~JZkdaqmv8qj5mN1gl9Fv5eOAj2Rwaw7Z4jO0QV5Xepb3VacGOG9rwBu~~NbI2WSrJdklJF2orRm1evuhwlgjgQTKu-aRgC3njgrsOGx0YyMPitgy3OIFqvK4ug4em-iqHwNqxzqKVakfUZxgPWhpiWBMVBTK7w__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/8cbb/e9c4/82a36303aa744fcac322ef2c7fa7a5dc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XLeY-k4By1b3LqQFCpIr5Y-UavD8Scar3WLpw8DaHx8AH8ePi-ZoRGUgOsllWq1Eyv47lPS40yB8SoMAfDPe3ykO1Fhhs1WkTDSYlXSaog6E0S~tGNX0EVlYemH4hT~Vn3ytQyUbIx8yrbMJoyNZigHjGnSccFem2C62CEWcyvPg778IK0wUH~PyrNWSYuhTe~wgnyLSZ658GMm3B~3R5afCJ3b4om2QLLwbtydKf6k4Jx6HyQ-~l2SZJ3JA7bIz5JBnfrF81bK1CgD~OND9ssjXffagMaHGtRv~0IxlhCvFfnavX8N~cE-VL1fameSJBg-NwxvqUHCaGD0I2mW1Jw__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/f1d7/5dbf/7933756b7f7be667da7b59f13b6b2e83?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PqKwHu1baaJVY7jroU~3VAEa3xqRjfaeH22cxtKjDaxyWUXeWdhTAB2mkGgy6MSlo2QOfqHT-YYPh8aK6emo9qQ~lp77~TZ6kruuw3NKPIVBERR35eDlKEaEmf7XarELkuklMqZiV06RdMfAwPLdhQLxoZBWmWaT1sLmCaDJm~kHRi9UiKc2wUwzJtXbiYFzVyt3kRA5SolCZOmuVfxkC8lJ-y4uZGYL1SKIVrzMRktZ3lIOxlk4jjh3c3cKNGB~j2hFcpUwZJAklew2buIvrcpCeTA3nXZUdhmL8OZUvQPs~0fFACDscTR7BGp9X~Ae3UUEbjUr8zF5G2MEp2JtqA__",
      name: "#ahtewh",
      gender: "Female",
      address: { city: "Kochi", state: "KL" },
    },
  ];
  const data =
    coordinator.userType == "business"
      ? {
          Experience: "5 years",
          Established: "2019",
          Models: "100+",
          "Reg. Type": "PVT LTD",
        }
      : {
          Experience: "5 years",
          Since: "2019",
          Models: "100+",
          Age: "54",
        };

   const dataEntries = Object.entries(data);
  const half = Math.ceil(dataEntries.length / 2); 
  const firstHalf = Object.fromEntries(dataEntries.slice(0, half)); 
  const secondHalf = Object.fromEntries(dataEntries.slice(half));
  return (
    <>
      <main className="max-w-screen-2xl mx-auto">
        <ProfileCard profile={coordinator} />
        <div className="py-section px-section space-y-8">
          <div className="lg:grid lg:grid-cols-3 gap-x-16 gap-y-12 space-y-8">
            <div className=" space-y-8   lg:col-span-2">
              <Summary heading="About" summary={coordinator.summary} />
        
             <div>
                <h2 className="custom-h2 text-fontColor-sub-heading">
                  Characteristics
                </h2>
                <div className="flex gap-5">
                  <div className="w-1/2">
                    <Characteristics  data={firstHalf} hideHeader />
                  </div>
                  <div className="w-1/2">
                    <Characteristics data={secondHalf} hideHeader />
                  </div>
                </div>
              </div>
             
              <Works/>
              <Gallery/> 
          
          
            </div>

            <div className="space-y-8 lg:col-span-1">
             
              <ShowReel
                videoId={coordinator.showReelId}
                description={
                  "Watch the Audition video of the model to get an idea if your requirements align with model’s capabilities."
                }
              />
              <Links
                header="Links"
                description="Stripe offices spread across 20 countries"
                links={coordinator.links}
              />
            </div>
          </div>

        
        </div>
        
      </main>
    </>
  );
};

export default page;



