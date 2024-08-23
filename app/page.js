import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full ">
      <div className="hero min-h-screen bg-center bg-cover mb-0 bg-[url('https://images.unsplash.com/photo-1544221479-8018af1e5f49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
        <div className=" bg-black/15  w-full h-screen flex flex-col items-center justify-center ">
          <div className="flex flex-col justify-center items-center text-center w-full mx-auto py-5 px-3  ">
            <div className="max-w-xl ">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Sentez la vie autrement
              </h1>
              <p className="mb-5 text-white">
                Découvrez notre boutique en ligne dédiée aux femmes à la
                recherche de mode éthique et responsable. Nous proposons une
                sélection de vêtements fabriqués à partir de matières naturelles
                et biologiques, dans le respect de l'environnement et des
                travailleurs.
              </p>
              <Link
                href={"/"}
                className=" my-4 outline outline-1 outline-white rounded-md text-white px-3 py-2 hover:scale-50 hover:translate-y-5 ease-in-out hover:duration-200 "
              >
                Allez à la boutique
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-center bg-cover mb-14 ">
        <div className="w-full grid lg:grid-cols-2 grid-cols-1">
          <Link href={'/'} className="w-full relative group">
          <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center " >
          <span
                className=" text-white px-3 py-2  group-hover:underline underline-offset-2 duration-1000"
              >
                Collection Printemps
              </span>
          </div>
          <img className="  w-full object-cover" src="https://images.unsplash.com/photo-1720072480777-a28572abab25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBmYXNoaW9ufGVufDB8MXwwfHx8Mg%3D%3D" alt="" />
          </Link>
          <Link href={"/"} className="w-full relative group">
          <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center " >
          <span
                className=" text-white px-3 py-2  group-hover:underline underline-offset-2 duration-1000 ease-in-out"
              >
                Collection Automne
              </span>
          </div>
          <img className="w-full object-cover" src="https://images.unsplash.com/photo-1664893875908-a1e56db71082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfDF8MHx8fDI%3D" alt="" />
          </Link>
        </div>
      </div>
    </main>
  );
}
