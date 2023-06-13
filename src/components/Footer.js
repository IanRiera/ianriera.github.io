import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark
        font-medium text-sm dark:text-light dark:border-light
        sm:text-base fixed bottom-0 left-0">
            <Layout className="py-8 flex items-center justify-between
            lg:felx-col lg:py-6">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-right lg:py-2">
                Based on the amazing tutorial by&nbsp;<Link href="https://devdreaming.com"
                className="underline undirle-offset-2"
                >CodeBucks</Link>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer;