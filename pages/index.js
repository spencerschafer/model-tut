import Link from "next/link";
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.root}>
            <h1>Software by Quokka Demo</h1>
            <p>Spencer Schafer</p>
            <div className={styles.container}>
                <Link href={'/skates'}>Roller skates</Link>
                <Link href={'/table'}>Bedside Table</Link>
                <Link href={'/hoodie'}>Hoodie</Link>
                <Link href={'/shoe'}>Shoe</Link>
                <Link href={'/toaster'}>Toaster</Link>
            </div>
        </div>
    )
}
