export default function Page({searchParams}:{searchParams:{
    query?:string,
    page?:string
}}){
    console.log('searchParams',searchParams)
    return <p>Customers Page</p>
}