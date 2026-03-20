// FooterAppStore.jsx
import React from 'react';
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiGithubFill,
  RiDribbbleFill,
} from '@remixicon/react';
import { Link } from 'react-router';

const FooterAppStore = () => {
  return (
    <footer className='bg-white text-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Newsletter */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-12 bg-gray-50 p-6 rounded-lg'>
          <div className='mb-4 md:mb-0'>
            <h2 className='text-xl font-bold mb-2'>
              Subscribe for App Updates!
            </h2>
            <p className='text-gray-600'>
              Get the latest apps, features, and publishing tips delivered to
              your inbox.
            </p>
          </div>
          <div className='flex w-full md:w-auto'>
            <input
              type='email'
              placeholder='you@example.com'
              className='border border-gray-300 rounded-l px-4 py-2 w-full md:w-72 focus:outline-none'
            />
            <button className='bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-r font-semibold transition min-w-max '>
              SIGN UP
            </button>
          </div>
        </div>

        {/* Links */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-8'>
          {/* Services */}
          <div>
            <h3 className='font-semibold mb-4'>App Services</h3>
            <ul className='space-y-2 text-gray-600'>
              <li>App Publishing</li>
              <li>App Review</li>
              <li>Monetization Tips</li>
              <li>App Analytics</li>
              <li>Marketing Support</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className='font-semibold mb-4'>Developer Info</h3>
            <ul className='space-y-2 text-gray-600'>
              <li>About Us</li>
              <li>Meet Our Team</li>
              <li>Developer Stories</li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className='font-semibold mb-4'>Resources</h3>
            <ul className='space-y-2 text-gray-600'>
              <li>Contact Support</li>
              <li>FAQs for Developers</li>
              <li>Live Chat Help</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2 text-gray-600'>
              <li>Privacy Policy</li>
              <li>App Submission Rules</li>
              <li>Refund Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h3 className='font-semibold mb-4'>App Tools</h3>
            <ul className='space-y-2 text-gray-600'>
              <li>Developer SDKs</li>
              <li>App Marketing Assets</li>
              <li>SEO Guides</li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className='flex justify-center lg:justify-end space-x-4 mb-6 text-gray-600 text-xl'>
          <Link to='#' className='hover:text-purple-600 transition'>
            <RiFacebookFill />
          </Link>
          <Link to='#' className='hover:text-purple-600 transition'>
            <RiInstagramFill />
          </Link>
          <Link to='#' className='hover:text-purple-600 transition'>
            <RiTwitterFill />
          </Link>
          <Link to='#' className='hover:text-purple-600 transition'>
            <RiGithubFill />
          </Link>
          <Link to='#' className='hover:text-purple-600 transition'>
            <RiDribbbleFill />
          </Link>
        </div>

        {/* Bottom */}
        <div className='flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t border-gray-200 pt-4'>
          <p>&copy; 2026 AppXplore. All rights reserved.</p>
          <div className='flex space-x-4 mt-2 md:mt-0'>
            <Link to='#' className='hover:text-gray-800 transition'>
              Terms & Conditions
            </Link>
            <Link to='#' className='hover:text-gray-800 transition'>
              Privacy Policy
            </Link>
            <Link to='#' className='hover:text-gray-800 transition'>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAppStore;
