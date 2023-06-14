import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark
        font-medium text-sm dark:text-light dark:border-light
        sm:font-size-[0.4rem] sm:line-height-[0.6rem]">
            <Layout className="py-8 flex items-center justify-between
            lg:flex-col lg:py-6">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-right lg:py-2">
                Kudos to&nbsp;<Link href="https://devdreaming.com"
                className="underline undirle-offset-2"
                >CodeBucks</Link>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer;