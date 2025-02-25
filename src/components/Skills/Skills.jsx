import './Skills.scss';

const Skills = () => {
    const skills = [
        {
            id: 1,
            name: 'html',
        },
        {
            id: 2,
            name: 'css',
        },
        {
            id: 3,
            name: 'javascript',
        },
        {
            id: 4,
            name: 'react',
        },
        {
            id: 5,
            name: 'node.js',
        },
        {
            id: 6,
            name: 'express.js',
        },
        {
            id: 7,
            name: 'mongodb',
        },
        {
            id: 8,
            name: 'c',
        },
        {
            id: 9,
            name: 'c++',
        },
        {
            id: 10,
            name: 'python',
        }
    ];

    return (
        <div className="skillsContainer">
            <h1>skills</h1>
            <div className="skillCards">
                {
                    skills.map((skill) => {
                        return (
                            <div className="skillCard" key={skill.id}>
                                <p>{skill.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Skills;