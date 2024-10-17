import Image from "next/image";
import LoginForm from "@/app/auth/login/page";


export default function HomePage() {
  
  return (
    <main>
      <div>
        <LoginForm />
      </div>
      <div>
        <p>test</p>
        <Image
          src="/images/bg-uncp_1x.webp"
          alt="Example image"
          width={800}
          height={600}
        />
      </div>
    </main>
  );
}
