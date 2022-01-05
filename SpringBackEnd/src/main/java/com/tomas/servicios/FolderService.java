package com.tomas.servicios;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tomas.entidades.Folder;
import com.tomas.repositorios.FolderRepository;
import com.tomas.repositorios.ToDoRespository;
import com.tomas.requestBody.FolderRequest;

@Service
public class FolderService {

	@Autowired
	FolderRepository folderRepository;

	@Autowired
	ToDoRespository toDoRespository;

	public ArrayList<Folder> getFolder() {
		return (ArrayList<Folder>) folderRepository.findAll();
	}

	public Folder saveFolder(FolderRequest request) {

		Folder folder = new Folder();
		folder.setNombre(request.getNombre());

		if (request.getFolderid() != null) {
			folder.setId(request.getFolderid());
		}

		return folderRepository.save(folder);
	}

	public void deleFolder(Long id) {

		folderRepository.deleteById(id);
	}
}
