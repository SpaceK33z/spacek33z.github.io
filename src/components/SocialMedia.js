import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  width: 27px;
  height: 32px;
  transition: 300ms ease;
  &:hover {
    fill: #e0542d;
  }
`;

export const IconLink = styled.a`
  margin-right: 10px;
`;

export const Twitter = () => (
  <Icon>
    <path d="M22.857 10.893q-1 0.446-2.161 0.607 1.214-0.714 1.661-2.089-1.161 0.679-2.393 0.911-1.089-1.179-2.732-1.179-1.554 0-2.652 1.098t-1.098 2.652q0 0.518 0.089 0.857-2.304-0.125-4.321-1.161t-3.429-2.768q-0.518 0.893-0.518 1.893 0 2.036 1.625 3.125-0.839-0.018-1.786-0.464v0.036q0 1.339 0.893 2.384t2.196 1.295q-0.518 0.143-0.911 0.143-0.232 0-0.696-0.071 0.375 1.125 1.33 1.857t2.17 0.75q-2.071 1.607-4.661 1.607-0.464 0-0.893-0.054 2.643 1.679 5.75 1.679 2 0 3.75-0.634t3-1.696 2.152-2.446 1.339-2.893 0.438-3.009q0-0.321-0.018-0.482 1.125-0.804 1.875-1.946zM27.429 7.429v17.143q0 2.125-1.509 3.634t-3.634 1.509h-17.143q-2.125 0-3.634-1.509t-1.509-3.634v-17.143q0-2.125 1.509-3.634t3.634-1.509h17.143q2.125 0 3.634 1.509t1.509 3.634z" />
  </Icon>
);

export const LinkedIn = () => (
  <Icon>
    <path d="M4.232 25.25h4.125v-12.393h-4.125v12.393zM8.625 9.036q-0.018-0.929-0.643-1.536t-1.661-0.607-1.688 0.607-0.652 1.536q0 0.911 0.634 1.527t1.652 0.616h0.018q1.054 0 1.696-0.616t0.643-1.527zM19.071 25.25h4.125v-7.107q0-2.75-1.304-4.161t-3.446-1.411q-2.429 0-3.732 2.089h0.036v-1.804h-4.125q0.054 1.179 0 12.393h4.125v-6.929q0-0.679 0.125-1 0.268-0.625 0.804-1.063t1.321-0.438q2.071 0 2.071 2.804v6.625zM27.429 7.429v17.143q0 2.125-1.509 3.634t-3.634 1.509h-17.143q-2.125 0-3.634-1.509t-1.509-3.634v-17.143q0-2.125 1.509-3.634t3.634-1.509h17.143q2.125 0 3.634 1.509t1.509 3.634z" />
  </Icon>
);

export const Facebook = () => (
  <Icon>
    <path d="M23.339 16.393l0.411-3.911h-3.536v-1.946q0-0.875 0.277-1.223t1.277-0.348h1.964v-3.911h-3.125q-2.714 0-3.893 1.286t-1.179 3.804v2.339h-2.339v3.911h2.339v11.339h4.679v-11.339h3.125zM27.429 7.429v17.143q0 2.125-1.509 3.634t-3.634 1.509h-17.143q-2.125 0-3.634-1.509t-1.509-3.634v-17.143q0-2.125 1.509-3.634t3.634-1.509h17.143q2.125 0 3.634 1.509t1.509 3.634z" />
  </Icon>
);

export const GitHub = () => (
  <Icon>
    <path d="M7.036 24.143q-0.143 0.161-0.357-0.054-0.232-0.196-0.071-0.339 0.143-0.161 0.357 0.054 0.214 0.196 0.071 0.339zM6.286 23.054q0.161 0.214 0 0.339-0.143 0.107-0.304-0.125t0-0.321q0.161-0.125 0.304 0.107zM5.196 21.982q-0.089 0.125-0.232 0.036-0.179-0.089-0.125-0.214 0.054-0.089 0.232-0.036 0.179 0.089 0.125 0.214zM5.75 22.589q-0.107 0.125-0.286-0.054-0.161-0.196-0.036-0.286 0.107-0.107 0.286 0.054 0.161 0.196 0.036 0.286zM8.054 24.589q-0.071 0.214-0.339 0.107-0.304-0.071-0.232-0.268t0.339-0.125q0.286 0.089 0.232 0.286zM9.179 24.679q0 0.196-0.286 0.196-0.304 0.036-0.304-0.196 0-0.196 0.286-0.196 0.304-0.036 0.304 0.196zM10.214 24.5q0.036 0.179-0.25 0.25t-0.321-0.143 0.25-0.268q0.286-0.036 0.321 0.161zM27.429 7.429v17.143q0 2.125-1.509 3.634t-3.634 1.509h-4q-0.286 0-0.438-0.018t-0.348-0.089-0.286-0.259-0.089-0.491v-4.268q0-1.732-0.929-2.536 1.018-0.107 1.83-0.321t1.679-0.696 1.446-1.188 0.946-1.875 0.366-2.688q0-2.161-1.411-3.679 0.661-1.625-0.143-3.643-0.5-0.161-1.446 0.196t-1.643 0.786l-0.679 0.429q-1.661-0.464-3.429-0.464t-3.429 0.464q-0.286-0.196-0.759-0.482t-1.491-0.688-1.536-0.241q-0.786 2.018-0.125 3.643-1.411 1.518-1.411 3.679 0 1.518 0.366 2.679t0.938 1.875 1.438 1.196 1.679 0.696 1.83 0.321q-0.714 0.643-0.875 1.839-0.375 0.179-0.804 0.268t-1.018 0.089-1.17-0.384-0.991-1.116q-0.339-0.571-0.866-0.929t-0.884-0.429l-0.357-0.054q-0.375 0-0.518 0.080t-0.089 0.205 0.161 0.25 0.232 0.214l0.125 0.089q0.393 0.179 0.777 0.679t0.563 0.911l0.179 0.411q0.232 0.679 0.786 1.098t1.196 0.536 1.241 0.125 0.991-0.063l0.411-0.071q0 0.679 0.009 1.839t0.009 1.214q0 0.393-0.196 0.598t-0.393 0.232-0.589 0.027h-4q-2.125 0-3.634-1.509t-1.509-3.634v-17.143q0-2.125 1.509-3.634t3.634-1.509h17.143q2.125 0 3.634 1.509t1.509 3.634z" />
  </Icon>
);
