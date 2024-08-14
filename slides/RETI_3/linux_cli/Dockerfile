FROM debian:11
WORKDIR /root

RUN apt update && \
    apt install -y man manpages toilet vim file tree git info sudo && \
    echo "alias ll='ls -la --color'" >> .bashrc && \
    echo "root:qwe123" | chpasswd && \
    useradd -ms /bin/bash antonio && \
    echo "antonio:qwe123" | chpasswd && \
    echo "antonio ALL=(ALL) ALL" >> /etc/sudoers


USER antonio
WORKDIR /home/antonio

RUN echo "alias ll='ls -la --color'" >> .bashrc && \
    echo "echo 'Welcome to ' | toilet -t --gay" >> .bashrc && \
    echo "echo 'Linux CLI' | toilet -t --gay" >> .bashrc && \
    echo "echo $'\n'" >> .bashrc && \
    echo 'echo -e "\e[1;5;32mDocker Image da utilizzare solo per l'"'"'esercitazione del prof Mancuso\e[0m"' >> .bashrc && \
    echo "echo $'\n'" >> .bashrc && \
    mkdir tmp && \
    git clone https://github.com/ittagnelli/SARP.git tmp/SARP

CMD ["/bin/bash"]

