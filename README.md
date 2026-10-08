# harunerkam.com

Personal portfolio website for **Harun Erkam Balı**.

The site is designed as an interactive terminal-style portfolio and presents my experience across **Full Stack Development, Backend Engineering, DevOps, and R&D**.

## Features

- Terminal-inspired interactive interface
- Command history and tab completion
- Virtual filesystem navigation with `ls`, `cd`, `cat`, and `pwd`
- Professional profile and technical skills
- Experience timeline
- Selected projects
- GitHub and LinkedIn shortcuts
- Downloadable CV variants
- Responsive layout
- SEO metadata and favicon support

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Cloudflare Web Analytics

No framework or build step is required.

## Available Commands

```bash
help
whoami
about
skills
experience
projects
ls
cd
cat
pwd
contact
cv
cv master
cv backend
cv fullstack
open github
open linkedin
clear
```

## Project Structure

```text
.
├── index.html
├── style.css
├── script.js
├── favicon.png
├── README.md
└── cv/
    ├── HARUN_ERKAM_BALI_CV.pdf
    ├── HARUN_ERKAM_BALI_BACKEND_CV.pdf
    └── HARUN_ERKAM_BALI_FULLSTACK_CV.pdf
```

## Running Locally

Because the project is fully static, you can open `index.html` directly in a browser.

For a local HTTP server:

### Python

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

### VS Code

You can also use the **Live Server** extension and open `index.html`.

## Deployment

The project can be deployed to any static hosting provider or standard web server.

Examples:

- Nginx
- Apache
- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel

The production version is published at:

**https://harunerkam.com**

## CV

The repository includes three CV versions:

- **Master CV**
- **Backend CV**
- **Full Stack CV**

These are available from the terminal interface through the `cv` command.

## Profile

**Harun Erkam Balı**  
Full Stack Developer | DevOps Engineer | R&D Engineer

Main technologies include:

- Python
- Django
- FastAPI
- Go
- Node.js / Express.js
- React / Next.js
- PostgreSQL
- Redis
- Docker
- Kubernetes / k3s
- Nginx
- CI/CD

## Links

- Website: https://harunerkam.com
- LinkedIn: https://www.linkedin.com/in/harunerkam/
- GitHub: https://github.com/erkamspyjamas

## License

This project is licensed under the **MIT License**.

See the [`LICENSE`](LICENSE) file for details.
