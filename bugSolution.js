```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleClick = async () => {
    router.push('/');
    await new Promise(resolve => setTimeout(resolve, 100)); // Small delay
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go Back Home</button>
    </div>
  );
}
```
```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```