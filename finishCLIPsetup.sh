source ~/.bashrc
conda update --all
conda install pytorch torchvision torchaudio cpuonly -cpytorch
RUN sudo apt install nodejs -y
RUN sudo apt install npm
RUN git clone https://github.com/openai/CLIP.git
RUN pip install ftfy regex tqdm
