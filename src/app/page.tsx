import Image from "next/image";
import LoginForm from "@/app/auth/login/page";
export default function HomePage() {
  return (
    <main>
      <div>
        <LoginForm />
      </div>
      <div>
        <Image
          src="/images/bg-uncp_1x.webp"
          alt="Example image"
          width={300}
          height={200}
        />
      </div>
    </main>
  );
}
