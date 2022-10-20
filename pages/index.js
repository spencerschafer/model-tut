import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.root}>
            <h1>Quokka Demo</h1>
            <p>Spencer Schafer</p>
            <div className={styles.container}>
                <a href={'/skates'}>Roller skates</a>
                <a href={'/table'}>Bedside Table</a>
                <a href={'/hoodie'}>Hoodie</a>
                <a href={'/shoe'}>Shoe</a>
                <a href={'/toaster'}>Toaster</a>
            </div>
        </div>
    )
}
