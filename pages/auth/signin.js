import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div className="flex flex-col items-center" key={provider.name}>
            <picture>
              <source
                srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                type="image/webp"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                alt="google-logo"
                className="w-64 object-cover"/>
            </picture>
            <button className="mt-40 bg-red-300 rounded-lg text-white p-1 hover:bg-red-500" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
              
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
