function Post({ params }: { params: { postSlug: string } }) {
  const slug = params.postSlug;

  const paragraphStyling = `opacity-80 leading-[1.5em]`;

  return (
    <>
      <div>
        <p className="text-[1.2em]">Working without proper plans is bullshit</p>
      </div>

      <div className="text-[0.9em] mt-10 flex flex-col gap-8">
        <p className={paragraphStyling}>
          I am working on a project named Discographer, it is supposed to be a
          multi-tenant artist discography site. I started working on it without
          any plans or designs. I have done this a lot of times, and it always
          worked. But not anymore I suppose.
        </p>
        <p className={paragraphStyling}>
          The things that I have worked on earlier were minuscule, small one
          function projects and one page sites, I never really had to worry
          about designs and plans while doing that. Because the problems that
          arised at that time due to lack of a proper plan were solved very
          easily. But the things that I am working on right now are a level up.
          They are not some top tier stuff, but not something simple as well. So
          working on them like I have always will not work is something that I
          am realising, especially after this discographer project. I realised
          this in IDOLCS too, but now it is more clear.
        </p>
      </div>
    </>
  );
}

export default Post;
