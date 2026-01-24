import React from 'react'
import styles from './blog.module.css'
import ArticleCard from '../_components/ArticleCard/ArticleCard'

export default function Blog() {
  return (
    <div className={styles.main}>
      <h1 className={styles.none}>Here is a collection of articles by me</h1>
      <ArticleCard href='/blog/loan-data-visualizer' imgPath='/gov.svg' title='Featured Project: Loan Data Visualizer' 
        text='There are many online groups, that act as peer-to-peer lending communities for small, short-term financial loans.' />
      <br />
      <ArticleCard href='/blog/how-this-site-is-hosted' imgPath='/server.svg' title='Article: How this site is hosted' 
        text='I am not a frontend developer, but sometimes I must ask myself, "What would someone who actually enjoys JavaScript do?"' />
      <br />
      <ArticleCard href='/blog/bit-arrays' imgPath='/barray.svg' title='Article: How does a bit array work?' 
        text='Most junior developers have probably heard about regular bytes and arrays, but did you know you can turn a whole number into an array?' />
    </div>
  )
}
