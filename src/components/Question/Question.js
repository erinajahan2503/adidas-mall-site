import React from 'react';
import './Quesion.css';

const Question = () => {
    return (
        <div className='ques-1'>
            <h1>How react work?</h1>
            <h2>রিয়েক্ট জাভাস্ক্রিপ্ট এর একটা লাইব্রেরি । রিয়েক্ট চালাতে চাইলে প্রথমেই রিয়েক্ট এর একটি প্যাকেজ নামাতে হবে । এই প্যাকেজ দিয়ে রিয়েক্ট ব্যবহার করা যায়।এখানে কম্পনেন্ট তৈরি করে ডাটা পাঠানো হয় আর সকল কম্পনেন্ট একটি রুট কম্পনেন্ট এর ভিতর থাকে। আর সকল কম্পনেন্ট JSX রিটার্ন করে ।রিয়েক্ট এর নিজস্ব নিয়ম রয়েছে।এখানে সরাসরি ক্লাস লেখা যায় না।এখানে প্যারেন্ট কম্পনেন্ট থেকে চাইল্ড কম্পনেন্ট এ সহজেই ডাটা পাঠানো যায়।
            </h2>
            <h1>How USESTATE work</h1>
            <h2>State মূলত কম্পনেন্ট এর ভিতরে ডাটা গুলো লোড করে রাখে । আর State তৈরি করবার জন্য UseState ব্যবহার করা হয় । UseState এ তথ্য পাঠানোর পর এটি Value ও State value পাঠায় । একটি ফাংশনে কম্পোনেন্টের ভিতরে React.useState কল করলে সেই কম্পোনেন্টের সাথে যুক্ত একটি State তৈরি হয়।প্রতিটি state  ভ্যালু রাখে । এই ভ্যালুটি object, array, boolean বা যেকােন ধরনের হতে পারে ।</h2>
        </div>
    );
};

export default Question;