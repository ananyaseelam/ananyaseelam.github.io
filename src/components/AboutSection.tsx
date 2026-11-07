import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-section px-6 py-16 pb-32">
      <h2 className="font-mono text-xl font-semibold text-ink">About me</h2>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
        <Image
          src="/profile_pic.JPG"
          alt="A photo of me"
          width={240}
          height={240}
          className="h-40 w-40 shrink-0 rounded-xl object-cover sm:h-48 sm:w-48"
        />
        <p className="max-w-lg text-sm leading-relaxed text-ink-secondary">
          Hello! I'm a software engineer currently working on Chrome Search! 
          I have experience with building tech for nonprofits, hci research, 
          and climate advocacy! I'm deeply interested in the intersection of 
          tech and social impact! In my free time, I like to crochet, 
          read, experiment with vegan baking, and run! 
        </p>
      </div>
    </section>
  );
}