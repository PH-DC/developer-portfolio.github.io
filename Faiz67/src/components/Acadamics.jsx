import React from 'react'
import '../styles/acadamics.css'

export const Acadamics = () => {
    return (
        <div className="acadamics">
            <div className="engg">
                <h1>Engineering</h1>
                <li>Pillai College of Engineering, New Panvel</li>
                <li>Final year Engineering Student</li>
                <li>Information Technology</li>
                <li>Current GPA: 7.84</li>
                <li>2018-2020</li>
            </div>
            <div className="hsc">
                <h1>HSC</h1>
                <li>S.V. College of Science And Commerce</li>
                <li>Nerul</li>
                <li>Percentage: 75.08%</li>
                <li>2017-2018</li>
            </div>
            <div className="ssc">
                <h1>SSC</h1>
                <li>St. Lawrence High School</li>
                <li>Vashi</li>
                <li>Percentage: 80.60%</li>
                <li>2015-2016</li>
            </div>
        </div>
    )
}
